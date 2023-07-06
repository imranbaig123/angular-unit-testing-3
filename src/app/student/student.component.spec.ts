import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import { AppRoutingModule } from '../app-routing.module';
import { StudentService } from './student.service';
import { of } from 'rxjs';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;
  let h1 : HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentComponent],
      providers:[StudentService],
      imports:[AppRoutingModule]
    });
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('spyon method', () => {
  //   spyOn(component,'calculate');
  //   expect(component.calculate).toHaveBeenCalled();
  // });

  // it('spyon method - 2', () => {
  //   let service = fixture.debugElement.injector.get(StudentService);
  //   spyOn(service,"SaveDetails").and.callFake(() => {
  //     return of({
  //       "result1":200
  //     })
  //   });

  // component.saveData();
  // expect(component.result ).toEqual ({
  //   "result1":200
  // })
  // });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    h1 = fixture.nativeElement.querySelector('h1'); 
  })

  it('verify h1', () => {
    component.StudentSchoolResult();
    fixture.detectChanges();
    expect(h1.textContent).toBe(component['studentResult']);
  });
});
