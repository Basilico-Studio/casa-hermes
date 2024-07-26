"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormData, ContactFormSchema } from "@/lib/zod";
import useClientTranslations from "@/lib/hooks/use-client-translations";
import { cn } from "@/lib/utils";
import { secondaryFont } from "@/lib/fonts";
import { Button } from "@/components/ui/button";
import Form from "./form-elements/form";
import { TextInput } from "./form-elements/text-input";
import { DateInput } from "./form-elements/date-input";
import { useTransition } from "react";
import { useToast } from "@/components/ui/use-toast";
import { TextAreaInput } from "./form-elements/textarea-input";

const ContactForm = () => {
  const { t } = useClientTranslations();
  const { toast } = useToast();
  const [isPending, startTransition] = useTransition();
  const form = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  async function onSubmit(data: ContactFormData) {
    startTransition(async () => {
      const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/email", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        toast({
          title: "Richiesta inviata!",
          description: "Email inviata con successo.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Errore",
          description: "Richiesta non inviata, contatta l'assistenza.",
        });
      }
    });
  }

  return (
    <div
      id="form"
      className="bg-primary-foreground max-w-xl rounded lg:-translate-y-44 -translate-y-28 p-6 space-y-6 w-full"
    >
      <h2
        className={cn(secondaryFont.className, "font-bold text-xl uppercase")}
      >
        {t("formTitle")}
      </h2>
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
        <TextAreaInput name="messaggio" label={t("messageInputLabel")} />
        <div className="pt-6">
          <Button
            type="submit"
            disabled={isPending}
            className="bg-[#72a16b] text-primary-foreground w-full"
          >
            {t("formButtonText")}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
