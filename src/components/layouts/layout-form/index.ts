import { LayoutForm as Layout } from "./layout-form";
import { LayoutFormHeading } from "./layout-form-heading/layout-form-heading";
import { LayoutFormButton } from "./layout-form-button/layout-form-button";
import { LayoutFormFooter } from "./layout-form-footer/layout-form-footer";
import { LayoutFormFooterString } from "./layout-form-footer-string/layout-form-footer-string";
import { LayoutFormFooterLink } from "./layout-form-footer-link/layout-form-footer-link";
import { LayoutFormForm } from "./layout-form-form/layout-form-form";

export const LayoutForm = Object.assign(Layout, {
  Heading: LayoutFormHeading,
  Button: LayoutFormButton,
  Footer: LayoutFormFooter,
  FooterString: LayoutFormFooterString,
  FooterLink: LayoutFormFooterLink,
  Form: LayoutFormForm,
});
