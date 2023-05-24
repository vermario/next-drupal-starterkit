import NextImage from "next/image";
import { useTranslation } from "next-i18next";

interface Contact {
  image: string;
  name: string;
  title: string;
  phoneNumber: string;
  email: string;
  id: number;
}

const contacts: Contact[] = [
  {
    image: "/john_dean.jpg",
    name: "John Dean",
    title: "CFO",
    phoneNumber: "+358445123456",
    email: "john.dean@mail.com",
    id: 1,
  },
  {
    image: "/charlie_dean.jpg",
    name: "Charlie Dean",
    title: "CTO",
    phoneNumber: "+358445123458",
    email: "charlie.dean@mail.com",
    id: 3,
  },
  {
    image: "/jane_dean.jpg",
    name: "Jane Dean",
    title: "CEO",
    phoneNumber: "+358445123457",
    email: "jane.dean@mail.com",
    id: 2,
  },
];

export function ContactList() {
  const { t } = useTranslation();
  return (
    <section id="contacts-section" className="pb-8 pt-8">
      <h2 className="text-heading-sm font-bold md:text-heading-md">
        {t("contact")}
      </h2>
      <ul className="flex flex-wrap justify-around pb-4 pt-4">
        {contacts?.map((contact) => (
          <li key={contact.id} className="flex flex-col items-center p-4">
            <div className="mb-6 flex h-[100px] items-center justify-center overflow-hidden">
              <NextImage
                src={contact.image}
                width={100}
                height={100}
                alt={`Portrait of ${contact.name}`}
                className="circle-clip"
              />
            </div>
            <p className="font-bold">{contact.name}</p>
            <p>{contact.title}</p>
            <p>{contact.phoneNumber}</p>
            <a
              href={`mailto:${contact.email}`}
              target="_blank"
              rel="noreferrer"
              className="hyperlink underline hover:no-underline"
            >
              {contact.email}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
