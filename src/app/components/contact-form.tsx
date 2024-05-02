"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, formSchema } from "../../../lib/zod";
import Form from "./form-elements/form";
import { TextInput } from "./form-elements/text-input";
import { DateInput } from "./form-elements/date-input";
import { Button } from "./elements/button";

const ContactForm = () => {
  const form = useForm<ContactFormData>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center">
      <Form onSubmit={onSubmit} {...form} className="py-10 w-1/2 flex flex-col items-center gap-3">
        <h2 className="font-semibold text-3xl pb-10">Richiedi Disponibilità</h2>
        <TextInput name="nomeCognome" label="Nome e Cognome" />
        <TextInput name="email" label="EMail" />
        <TextInput name="telefono" label="Telefono" />
        <div className="flex gap-10">
          <DateInput name="checkin" label="Check In" />
          <DateInput name="checkout" label="Check Out" />
        </div>
        <Button className="bg-teal-900 text-white w-full md:w-2/5 mt-5">Invia Richiesta</Button>
      </Form>
    </div>
  );
};

export default ContactForm;
