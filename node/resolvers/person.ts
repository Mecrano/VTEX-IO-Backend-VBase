interface Person {
  name: string
  lastName: string
  phone: string
  dni: string
}

export const saveData = (
  _: any,
  { name, lastName, phone, dni }: Person,
  ctx: Context
) => {
  return ctx.clients.vbase
    .saveJSON('admin-vbase-example', 'person', {
      name,
      lastName,
      phone,
      dni,
    })
    .then(() => ({
      name,
      lastName,
      phone,
      dni,
    }))
}

export const readData = (_: any, __: any, ctx: Context) => {
  return ctx.clients.vbase.getJSON('admin-vbase-example', 'person', true)
}
