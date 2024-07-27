import { Component, computed, inject} from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {

  // constructor(private investmentService: InvestmentService) {}

  private investmentService = inject(InvestmentService);

  // get results() {
  //   return this.investmentService.resultsData;
  // }

  // instead of using get method we can use computed as this does not return the writeable signal from the service but only returns a readOnly Signal.
  // results = computed(() => this.investmentService.resultsData());

  // Or
  results = this.investmentService.resultsData.asReadonly();



  // @Input() results?: InvestmentsResult[];

  // results = input<InvestmentsResult[]>()

}
