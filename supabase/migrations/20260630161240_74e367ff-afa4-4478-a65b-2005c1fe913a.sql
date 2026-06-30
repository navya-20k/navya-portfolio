-- Contact messages from portfolio visitors
create table public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  message text not null,
  created_at timestamptz not null default now()
);

-- Grants: anyone can submit; only service role can read
grant insert on public.contact_messages to anon, authenticated;
grant all on public.contact_messages to service_role;

alter table public.contact_messages enable row level security;

-- Allow anyone to insert a message (public contact form)
create policy "Anyone can submit a contact message"
on public.contact_messages
for insert
to anon, authenticated
with check (
  length(trim(name)) between 1 and 100
  and length(trim(email)) between 3 and 200
  and length(trim(message)) between 1 and 2000
);
-- No SELECT policy → messages are not readable from the client.