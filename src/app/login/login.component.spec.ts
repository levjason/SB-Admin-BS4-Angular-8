import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

import { LoginComponent } from './login.component';
import { LoginModule } from './login.module';


describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
      beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LoginModule, RouterTestingModule, BrowserAnimationsModule, TranslateModule]
        }).compileComponents();
    }); 
    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
