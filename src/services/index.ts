import { createClient } from "@supabase/supabase-js";

interface QueriesTable {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  year: string;
  subject: string;
  message: string;
}

interface ApplicationsTable {
  opening_id: string;
  cv_url: string;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  message: string;
}

const supabase = createClient(
  import.meta.env.TT_DB_URL,
  import.meta.env.TT_DB_KEY,
);

export default {
  async saveContact(data: QueriesTable) {
    await supabase.from("queries").insert(data);
  },
  async uploadCV(file: File) {
    const fileExt = file.name.split(".").pop();
    const filePath = `${Math.random()}.${fileExt}`;
    await supabase.storage.from("cvs").upload(filePath, file);
    return filePath;
  },
  async saveApplication(data: ApplicationsTable) {
    await supabase.from("applications").insert({
      ...data,
      cv_url: supabase.storage.from("cvs").getPublicUrl(data.cv_url).data.publicUrl,
    });
  },
};
