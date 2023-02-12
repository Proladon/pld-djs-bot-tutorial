import { Events } from 'discord.js'

export const event = {
  name: Events.ClientReady,
  once: true,
}

export const action = (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`)
}
