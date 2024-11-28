'use client';

const Gallery = () => {
  const images = [
    { id: 1, src: 'https://picsum.photos/id/57/600/400', alt: 'Pest Control Service 1' },
    { id: 2, src: 'https://picsum.photos/id/57/600/400', alt: 'Pest Control Service 2' },
    { id: 3, src: 'https://picsum.photos/id/57/600/400', alt: 'Pest Control Service 3' },
    { id: 4, src: 'https://picsum.photos/id/57/600/400', alt: 'Pest Control Service 4' },
    { id: 5, src: 'https://picsum.photos/id/57/600/400', alt: 'Pest Control Service 5' },
    { id: 6, src: 'https://picsum.photos/id/57/600/400', alt: 'Pest Control Service 6' },
  ];

  return (
    <section className="py-10 px-3 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Gallery</h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {images.map((image) => (
            <div
              key={image.id}
              className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition-all"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
