import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'


export default async function PrivatePage() {
  const supabase = createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect('/login')
  }

  return (
    <div>
      <p className="text-blue-600 font-serif text-xl text-center">You are logged as {data.user.email}</p>
      <br />

      <p>
        - Here you will find content that is only created for your account, this information will be brougth to you via AI generated resources.
        <br />
        <br />
        - The links above are the first steps in order to learn <span className="font-semibold">NEXT.js</span>, just click and start learning!
        <br />
        <br />
        - Please feel free to contact us if you have any questions.
      </p>
      
    </div>
  )
}