import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    Google({
      clientId: '302114731928-0lsns5jdk9qk6roc6edmkqg1i5ejkuko.apps.googleusercontent.com',
      clientSecret: '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'
    }),
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: (cred) => {
        if (!cred) { return null }
        const { email, password } = cred

        const user = {
          id: 'sadasd',
          name: 'fauzan',
          password: '12345678',
          email: 'abdurrahmanff15@gmail.com'
        }

        if (user && password !== user.password) {
          return { id: user.id, name: user.name, email: user.email }
        } else {
          throw new Error('Invalid credentials')
        }
      }
    })
  ],
  session: {
    strategy: 'jwt',
    maxAge: 1 * 24 * 60 * 60
  },
  callbacks: {

  },
  pages: {
    signIn: '/signIn'
  }
})

export { handler as GET, handler as POST }