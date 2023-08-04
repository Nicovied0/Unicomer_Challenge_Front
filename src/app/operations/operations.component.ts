import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WithdrawalService } from '../Services/Withdrawal.service';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../Services/User.service';
import { DepositService } from '../Services/DepositService.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css']
})
export class OperationsComponent implements OnInit {
  currentRouteName: string = '';
  withdrawForm: FormGroup;
  cardIds: string[] = [];
  selectedCardId: string | null = null;
  cardBalance: number | null = null;
  showRetirar = false
  showIngresar = false

  constructor(
    private formBuilder: FormBuilder,
    private withdrawalService: WithdrawalService,
    private route: ActivatedRoute,
    private userService: UserService,
    private depositService: DepositService
  ) {
    this.withdrawForm = this.formBuilder.group({
      senderCardId: ['', Validators.required],
      amount: [0, [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() {
    this.currentRouteName = this.route.snapshot.routeConfig?.path || '';
    this.userService.getInfo().subscribe(
      (userData: any) => {
        this.cardIds = userData.cardIds;
      },
      (error: any) => {
        console.error('Error al obtener los datos del usuario', error);
      }
    );
  }

  onSelectCard() {
    this.selectedCardId = this.withdrawForm.get('senderCardId')?.value;

    // Obtener y mostrar el saldo de la tarjeta seleccionada
    if (this.selectedCardId) {
      this.withdrawalService.getCardBalance(this.selectedCardId).subscribe(
        (balance) => {
          this.cardBalance = balance;
        },
        (error) => {
          console.error('Error al obtener el saldo de la tarjeta', error);
        }
      );
    }
  }

  onSubmit() {
    if (this.withdrawForm.valid && this.selectedCardId) {
      const amount = this.withdrawForm.get('amount')?.value;
      const senderCardId = this.selectedCardId;

      // Llamar al servicio para obtener el saldo de la tarjeta seleccionada
      this.withdrawalService.getCardBalance(senderCardId).subscribe(
        (balance) => {
          this.cardBalance = balance;

          if (amount <= this.cardBalance!) {
            this.withdrawalService.withdraw(senderCardId, amount).subscribe(
              (response) => {
                console.log('Extracción realizada con éxito', response);
                if (this.cardBalance !== null) {
                  this.cardBalance = this.cardBalance - amount;
                }
              },
              (error) => {
                console.error('Error al realizar la extracción', error);
              }
            );
          } else {
            console.error('Saldo insuficiente para realizar la extracción');
          }
        },
        (error) => {
          console.error('Error al obtener el saldo de la tarjeta', error);
        }
      );
    }
  }

  toggleShowRetirar() {
    this.showRetirar = !this.showRetirar
    this.showIngresar = false
  }
  toggleShowIngresar() {
    this.showIngresar = !this.showIngresar
    this.showRetirar = false
  }

  onDeposit() {
    if (this.withdrawForm.valid && this.selectedCardId) {
      const amount = this.withdrawForm.get('amount')?.value;
      const senderCardId = this.selectedCardId;

      this.depositService.depositToCard(senderCardId, amount).subscribe(
        (response) => {
          console.log('Depósito realizado con éxito', response);
          if (this.cardBalance !== null) {
            this.cardBalance = this.cardBalance + amount;
          }
        },
        (error) => {
          console.error('Error al realizar el depósito', error);
        }
      );
    }
  }


}
