import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialProvider from "next-auth/providers/credentials"
import  v4  from "uuid"

const id = v4 as unknown as string

export default NextAuth({

  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialProvider({
      name: "NextAuthCredentials",
      credentials: {},
      async authorize(credentials){
        console.log(credentials);
        
        return{
          id: id,
          name: "Guilherme azevedo Melim",
          email: "guilherme.bobina@gmail.com",
          image: "https://github.com/Guilherme-Azevedo-Melim.png"
        }
      }
    })
  ],
  secret: process.env.SECRET,
})