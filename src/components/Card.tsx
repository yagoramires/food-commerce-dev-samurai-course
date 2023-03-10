import { FiPlus } from 'react-icons/fi'
import LoadingCard from './LoadingCard'

interface CardProps {
  data: any[]
}

const Card = ({ data }: CardProps) => {
  return (
    <div className='gridDisplay sm:flex sm:flex-col'>
      {data.length === 0 && <LoadingCard />}
      {data.length > 0 &&
        data.map((item) => (
          <div
            key={item.id}
            className='flex flex-col items-center justify-center pt-4 rounded-md shadow-md bg-black200'
          >
            <h2 className='w-full pb-4 text-2xl font-bold text-center'>{item.name}</h2>

            <img src={item.image} alt={item.name} className='h-[350px] w-full object-cover' />
            {item.description && (
              <div className='w-full px-4 pt-4'>
                <p className='font-bold'>Ingredientes :</p>
                <p className='text-sm italic '>{item.description}</p>
              </div>
            )}
            <div className='flex items-center justify-between w-full p-4'>
              <div className='w-full '>
                <p className='font-bold'>Valor :</p>
                <p className='text-sm'>
                  {item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                </p>
              </div>
              <button
                type='button'
                className='flex items-center justify-center w-10 h-10 text-xl leading-4 transition-all duration-150 shadow-md bg-red hover:bg-red100'
              >
                <FiPlus size={20} />
              </button>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Card
