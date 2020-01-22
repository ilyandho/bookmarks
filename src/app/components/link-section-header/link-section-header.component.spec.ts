import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkSectionHeaderComponent } from './link-section-header.component';

describe('LinkSectionHeaderComponent', () => {
  let component: LinkSectionHeaderComponent;
  let fixture: ComponentFixture<LinkSectionHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinkSectionHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkSectionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
