import React from 'react'
import Image from 'next/image'

const SignupStudent = () => {
  return (
    <section className='flex flex-row gap-10 h-screen'>
        <div className='flex-1'>

        </div>
        <div className='flex-1 lg:flex flex-col hidden p-8 relative signupBackground h-full'>
            <div className='flex items-end justify-end'>
                <Image
                    src="/logo.svg"
                    alt="logo"
                    width={130}
                    height={130}
                    className='object-contain'
                />
            </div>
            <div className='flex px-10 absolute bottom-0 text-center flex-col items-center justify-center '>
                <h1 className='text-4xl text-white font-bold'>
                    Devenir un Etudant
                </h1>
                <p className='text-gray-300 my-5 '>
                    Notre plateforme vous offre les outils nécessaires pour atteindre vos objectifs éducatifs. Inscrivez-vous aujourd'hui et commencez votre parcours vers l'apprentissage enrichissant et stimulant.
                </p>
                <Image
                    src="/etudiant.svg"
                    alt="etudiant"
                    width={500}
                    height={500}
                    className='object-contain '
                />
            </div>
        </div>
    </section>
  )
}

export default SignupStudent