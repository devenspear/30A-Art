'use client';

export function WhatsOn() {
  // Placeholder events - will be replaced with actual data later
  const placeholderEvents = [
    {
      id: 1,
      title: 'Digital Graffiti Festival',
      date: 'May 2026',
      location: 'Alys Beach',
      type: 'Festival',
    },
    {
      id: 2,
      title: 'Gallery Night',
      date: 'First Friday Monthly',
      location: 'Rosemary Beach',
      type: 'Event',
    },
    {
      id: 3,
      title: 'Monarch Art Trail',
      date: 'Year-Round',
      location: '30A Corridor',
      type: 'Exhibition',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-light text-primary mb-4">
            What's On
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Upcoming exhibitions, events, and cultural happenings along 30A
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl p-6 border border-border hover:shadow-md transition-shadow duration-200"
            >
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-medium rounded-full">
                  {event.type}
                </span>
              </div>
              <h3 className="text-xl font-medium text-primary mb-2">
                {event.title}
              </h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>{event.date}</p>
                <p>{event.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground bg-muted/50 inline-block px-6 py-3 rounded-lg">
            Event calendar coming soon. Submit events at{' '}
            <span className="text-secondary font-medium">hello@30a.art</span>
          </p>
        </div>
      </div>
    </section>
  );
}
