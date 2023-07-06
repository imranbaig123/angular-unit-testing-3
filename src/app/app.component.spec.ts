import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Addition } from './calculator';

describe('AppComponent', () => {

  let Component = new AppComponent();

  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule],
    declarations: [AppComponent]
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'angular-unit-testing-2'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('angular-unit-testing-2');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('angular-unit-testing-2 app is running!');
  // });

  // it('My testcase',() => {
  //   expect(true).toBe(true);
  // })

  // it('show Alert Message', () => {
  //   expect(Component.ShowMessage("Hello")).toBe("Hello");
  // })

  it('show Addition Result', () => {
    expect(Addition(10,20)).toBeGreaterThan(20);
  })

  it('ToBe and ToEqual Test Case', () => {
    // var a = true;
    var a = 5;
    // var b = "Hello";

    // expect(a).toBeTruthy();
    // expect(a).toEqual(b);
    expect(a).toBeGreaterThan(4);
    // expect(a).toBeGreaterThanOrEqual(5);
    // expect(a).toBeLessThan(6);
    // expect(a).toBeLessThanOrEqual(4);
  })

  // it('jasmine matcher - match function', () => {
  //   var input = "the dotnetoffice tutorials";
  //   var strPhone = "001-789-56-789";
  //   expect(input).toMatch(/dotnetoffice/);
  //   expect(input).toMatch(/dotnetoffice/i);
  //   expect(input).not.toMatch(/dot1/);
  //   expect(input).toMatch(/\d{3}-\d{3}-\d{2}-\d{2}/);
  // })

  it('jasmine matcher - tobe Defined', function() {
    var MyObj = {
      foo :"foo"
    }
    var Myfunction = (function() {}) ();
    var strUndefined;
    expect("the dotnet office").toBeDefined();
    expect(MyObj).toBeDefined();
    expect(MyObj.foo).toBeDefined();
    expect(Myfunction).not.toBeDefined();
    expect(strUndefined).not.toBeDefined();
  });

  //

  it('jasmine matcher - tobe null', function() {
    var nullValue = null;
    var valueUndefined;
    var notNull = "notNull";
    expect("the dotnet office").toBeDefined();
    expect(null).toBeNull();
    expect(nullValue).toBeNull();
    expect(notNull).not.toBeNull();
    expect(valueUndefined).not.toBeNull();
  });

  it('jasmine matcher - tocontain', function() {
    var MyArray = ["jasmine", "dotnetoffice", "tutorials"];
    // expect([1,2,3]).toContain[2];
    expect([1,2,3]).toContain(2,3);
    // expect(MyArray).toContain["jasmine"];
    expect([1,2,3]).not.toContain(4);
    expect(MyArray).not.toContain("dot");
  });

  it('Test 1', () => {
  //Arrange

  let comp = new AppComponent();

  //Act

  let msg = comp.ShowMessage("Hello");

  //Assert

  expect(msg).toBe("Hello");

  });
});
