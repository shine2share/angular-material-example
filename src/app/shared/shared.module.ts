import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { LoadingOverlayComponent } from "./components/loading-overlay/loading-overlay.component";
import { ScrollTopDirective } from "./directives/scroll-top.directive";
import { ExponentialStrengthPipe } from "./pipes/exponential-strength.pipe";
import { MaxLengthDirective } from './directives/max-length.directive';
import { MaterialModule } from "./material.module";

const THIRD_MODULES = [RouterModule, FormsModule, ReactiveFormsModule, MaterialModule];
const COMPONENTS = [LoadingOverlayComponent];
const PIPES = [ExponentialStrengthPipe];
const DIRECTIVES = [ScrollTopDirective, MaxLengthDirective];

@NgModule({
    declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
    imports: [
        CommonModule, ...THIRD_MODULES
    ],
    exports: [CommonModule, ...THIRD_MODULES, ...COMPONENTS, ...DIRECTIVES, ...PIPES],
    providers: []
})
export class ShareModule { }