const numUniqueEmails = emails => new Set(emails.map(mail => `${mail.split('@')[0].replace(/\+.*$|\./g, '')}@${mail.split('@')[1]}`)).size
