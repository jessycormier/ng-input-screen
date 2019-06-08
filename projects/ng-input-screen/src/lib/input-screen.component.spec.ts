import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InputScreenComponent } from './input-screen.component';

/**
 * Feedback on how to unit test better is welcomed!
 *
 * GUIDS are used at random to test random values.
 */
describe('Input Screen Component', () => {

  let component: InputScreenComponent;
  let fixture: ComponentFixture<InputScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InputScreenComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('#screenCharacter is set to default character', () => {
    expect(component.screenCharacter).toEqual('•');
  });

  it('#screen will be length of input value', () => {
    const test1Value = 'abc';
    const test2Value = '050bf7e2-cc5d-5368-88e3-7b63e3ba818e';
    component.value = test1Value;
    expect(component.screen).toEqual(component.screenCharacter.repeat(test1Value.length));
    component.value = test2Value;
    expect(component.screen).toEqual(component.screenCharacter.repeat(test2Value.length));
  });

  it('#onBlur sets value to internal value', () => {
    fixture.detectChanges();

    const testValue = '4bb4566d-842a-593d-8cb9-6dc8fc850014';

    fixture.nativeElement.value = testValue;
    expect(component.value).toEqual('');

    component.onBlur(fixture.nativeElement);
    expect(component.value).toEqual(testValue);
  });

  it('#onFocus sets value to internal value', () => {
    fixture.detectChanges();

    const testValue = '61bd4118-15dd-5f97-9109-6e3c6321c859';

    component.value = testValue;
    expect(fixture.nativeElement.value).toBeUndefined();

    component.onFocus(fixture.nativeElement);
    expect(fixture.nativeElement.value).toEqual(testValue);
  });
});
