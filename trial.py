import mailtrap as mt

mail = mt.Mail(
    sender=mt.Address(email="hello@demomailtrap.co", name="Mailtrap Test"),
    to=[mt.Address(email="abhishek.nagdeve@gmail.com")],
    subject="You are awesome!",
    text="Congrats for sending test email with Mailtrap!",
    category="Integration Test",
)

client = mt.MailtrapClient(token="4d9c38e1040f14ceaf1ec92042337e27")
response = client.send(mail)

print(response)