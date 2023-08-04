import { Component, OnInit } from '@angular/core';
import { CardService } from '../Services/Cards.service';
declare const Swal: any;

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cardIds: string[] = [];
  nameDate: string = ''
  cardsData: any[] = [];
  newCardData = { cardHolderName: '', balance: null };
  isSubmitting = false;
  newCard = false

  constructor(private cardService: CardService) { }

  toggleNewCard() {
    this.newCard = !this.newCard
  }

  ngOnInit() {
    const userUnicomer = JSON.parse(localStorage.getItem('userUnicomer')!);
    this.cardIds = userUnicomer.cardIds;
    this.nameDate = userUnicomer.name;
    this.newCardData.cardHolderName = this.nameDate;
    console.log(userUnicomer.documentNumber);
    this.cardService.getCardsData(this.cardIds).subscribe(
      (cardsData: any[]) => {
        this.cardsData = cardsData;
      },
      error => {
        console.error('Error al obtener los datos de las tarjetas', error);
      }
    );
  }


  submitForm() {
    this.isSubmitting = true;

    const userId = JSON.parse(localStorage.getItem('userUnicomer')!).id;
    const numberDni = JSON.parse(localStorage.getItem('userUnicomer')!);
    const expectedDocumentNumber = numberDni.documentNumber;

    Swal.fire({
      title: 'Ingresa tu número de documento',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      showLoaderOnConfirm: true,
      preConfirm: (documentNumber: any) => {
        if (documentNumber !== expectedDocumentNumber) {
          Swal.showValidationMessage(
            `Ingrese su documento`
          );
          return false;
        }

        return fetch(`https://unicomer.up.railway.app/users/dni/${documentNumber}`)
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText);
            }
            return response.json();
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            );
          });
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result: any) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `Documento verificado`,
          text: `Tu documento fue verificado correctamente`,
          icon: 'success'
        });

        this.cardService.requestNewCard(this.newCardData, userId, expectedDocumentNumber, '').subscribe(
          (response: any) => {
            this.isSubmitting = false;
            this.cardsData.push(response);
          },
          error => {
            this.isSubmitting = false;
            console.error('Error al solicitar una nueva tarjeta', error);
          }
        );
      } else {
        this.isSubmitting = false;
      }
    });
  }
}
