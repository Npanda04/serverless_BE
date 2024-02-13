import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/user", (c)=>{
  return c.json({
    message: "heyyyyy from get user"
  })
})

app.post("/user", async (c)=>{
  const body = await c.req.json()
  console.log(body)
  console.log(c.req.query("param"))
  return c.text("heyyy")
  
})

export default app
