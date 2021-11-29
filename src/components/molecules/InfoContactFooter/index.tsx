import CompanyAdress from "../../atoms/CompanyAdress";
import CompanyEmail from "../../atoms/CompanyEmail";
import ContactNumber from "../../atoms/ContactNumber";

export default function InfoContactFooter() {
  return (
    <>
      <CompanyAdress PContent="Rua 700, nº 647 Centro, Balneário Camboriú – SC" />
      <CompanyEmail PContent="comercial@zioncontent.com.br" />
      <ContactNumber PContent="(47) 3366 2698" />
      <ContactNumber PContent="(47) 99918 5247" />
    </>
  );
}
