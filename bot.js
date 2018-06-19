client = discord.Client()

@client.event
async def on_ready():
    print("EnigBot - Bot Online")
    print(client.user.name)
    print(client.user.id)
    print("------EnigBot------")

client.login(process.env.BOT_TOKEN)
