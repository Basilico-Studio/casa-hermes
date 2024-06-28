"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, formSchema } from "../../lib/zod";
import useClientTranslations from "@/lib/hooks/use-client-translations";
import { cn } from "@/lib/utils";
import { secondaryFont } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import Form from "./form-elements/form";
import { TextInput } from "./form-elements/text-input";
import { DateInput } from "./form-elements/date-input";

const ContactForm = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(formSchema),
  });

  const { t } = useClientTranslations();

  async function onSubmit(data: ContactFormData) {
    const res = await fetch("http://localhost:3000/api/email", {
      method: "POST",
      body: JSON.stringify(data),
    });
    // const result = await res.json();
    // console.log(result);
  }

  return (
    <div id="contatti" className="bg-primary-foreground max-w-xl rounded lg:-translate-y-44 -translate-y-28 p-6 space-y-6 w-full">
      <h2 className={cn(secondaryFont.className, "font-bold text-xl uppercase")}>{t("formTitle")}</h2>
      <Form {...form} onSubmit={onSubmit} className="space-y-3">
        <TextInput name="nomeCognome" label={t("nameInputLabel")} />
        <TextInput name="email" label="Email" />
        <div className="flex flex-col md:flex-row gap-3 w-full">
          <TextInput name="telefono" label={t("phoneInputLabel")} />
          <div className="flex gap-3">
            <DateInput name="checkin" label="Check In" />
            <DateInput name="checkout" label="Check Out" />
          </div>
        </div>
        <div className="pt-6">
          <Button type="submit" className="bg-[#72a16b] text-primary-foreground w-full">
            {t("formButtonText")}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
