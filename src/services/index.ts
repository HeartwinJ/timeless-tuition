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

const supabase = createClient(
  import.meta.env.TT_DB_URL,
  import.meta.env.TT_DB_KEY,
);

export default {
  async saveContact(data: QueriesTable) {
    await supabase.from("queries").insert(data);
  },
};
