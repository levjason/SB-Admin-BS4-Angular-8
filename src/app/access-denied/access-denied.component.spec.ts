import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateFakeLoader, TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';

import { AccessDeniedComponent } from './access-denied.component';
import { AccessDeniedModule } from './access-denied.module';

describe('AccessDeniedComponent', () => {
    let component: AccessDeniedComponent;
    let fixture: ComponentFixture<AccessDeniedComponent>;

    beforeEach(async() => {
        TestBed.configureTestingModule({
            imports: [AccessDeniedModule, 
                TranslateModule.forRoot({
                    loader : {
                        provide: TranslateLoader,
                        useClass: TranslateFakeLoader
                    }
                })],
                providers: [
                    TranslateService
                ],
            declarations: [AccessDeniedComponent]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AccessDeniedComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
