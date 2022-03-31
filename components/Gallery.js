import Image from './Image'

// eslint-disable-next-line jsx-a11y/alt-text
const Gallery = ({ images }) => {
  let id = Math.random
  return (
    <div className="container mx-auto">
      <div className="-m-1 flex flex-wrap md:-m-2 ">
        {images.map(function (element, index) {
          return (
            <div key={id + '_' + index} className="flex w-1/3 flex-wrap">
              <div className="w-full p-1 md:p-2">
                <Image
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={element}
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Gallery
