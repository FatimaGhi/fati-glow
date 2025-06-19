import { NgModule } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import {
  ShoppingCart,
  CheckCircle,
  Loader,
  Truck,
  PackageCheck
} from 'lucide-angular';

const icons = {
  ShoppingCart,
  CheckCircle,
  Loader,
  Truck,
  PackageCheck
};

@NgModule({
  imports: [LucideAngularModule.pick(icons)],
  exports: [LucideAngularModule]
})
export class LucideIconsModule {}
