export class PlanetService {
    private planets: any = [
        {
          id:0,
          name: "Terra",
          description: `The legend of Grand Duchess Anastasia Nikolaevna of Russia.`,
      details: [
        { title: 'Music and Lyrics', body: 'Lynn Ahrens and Stephen Flaherty' },
        {
          title: 'Book by',
          body: 'Terrence McNally'
        },
        {
          title: 'Based on',
          body: 'A 1997 film of the same name.'
        },
        {
          title: 'Background',
          body: `A reading was held in 2012, featuring Kelli Barret as Anya (Anastasia), Aaron Tveit as Dmitry, Patrick Page as Vladimir, and Angela Lansbury as the Empress Maria. A workshop was held on June 12, 2015, in New York City, and included Elena Shaddow as Anya, Ramin Karimloo as Gleb Vaganov, a new role, and Douglas Sills as Vlad.
        The original stage production of Anastasia premiered at the Hartford Stage in Hartford, Connecticut on May 13, 2016 (previews). The show was directed by Darko Tresnjak and choreography by Peggy Hickey, with Christy Altomare and Derek Klena starring as Anya and Dmitry, respectively.
        Director Tresnjak explained: "We've kept, I think, six songs from the movie, but there are 16 new numbers. We've kept the best parts of the animated movie, but it really is a new musical." The musical also adds characters not in the film. Additionally, Act 1 is set in Russia and Act 2 in Paris, "which was everything modern Soviet Russia was not: free, expressive, creative, no barriers," according to McNally.
        The musical also omits the supernatural elements from the original film, including the character of Rasputin and his musical number "In the Dark of the Night", (although that song’s melody is repurposed in the new number "Stay, I Pray You"), and introduces instead a new villain called Gleb, a general for the Bolsheviks who receives orders to kill Anya.`
        }
      ],
          imageUrl: "https://proxy.olhardigital.com.br/wp-content/uploads/2022/12/Terra-1024x576.jpg",
        },
        {
          id:1,
          name: "Marte",
          description: `The legend of Grand Duchess Anastasia Nikolaevna of Russia.`,
          details: [
            { title: 'Music and Lyrics', body: 'Lynn Ahrens and Stephen Flaherty' },
            {
              title: 'Book by',
              body: 'Terrence McNally'
            },
            {
              title: 'Based on',
              body: 'A 1997 film of the same name.'
            },
            {
              title: 'Background',
              body: `A reading was held in 2012, featuring Kelli Barret as Anya (Anastasia), Aaron Tveit as Dmitry, Patrick Page as Vladimir, and Angela Lansbury as the Empress Maria. A workshop was held on June 12, 2015, in New York City, and included Elena Shaddow as Anya, Ramin Karimloo as Gleb Vaganov, a new role, and Douglas Sills as Vlad.
            The original stage production of Anastasia premiered at the Hartford Stage in Hartford, Connecticut on May 13, 2016 (previews). The show was directed by Darko Tresnjak and choreography by Peggy Hickey, with Christy Altomare and Derek Klena starring as Anya and Dmitry, respectively.
            Director Tresnjak explained: "We've kept, I think, six songs from the movie, but there are 16 new numbers. We've kept the best parts of the animated movie, but it really is a new musical." The musical also adds characters not in the film. Additionally, Act 1 is set in Russia and Act 2 in Paris, "which was everything modern Soviet Russia was not: free, expressive, creative, no barriers," according to McNally.
            The musical also omits the supernatural elements from the original film, including the character of Rasputin and his musical number "In the Dark of the Night", (although that song’s melody is repurposed in the new number "Stay, I Pray You"), and introduces instead a new villain called Gleb, a general for the Bolsheviks who receives orders to kill Anya.`
            }
          ],
          imageUrl: "https://www.infoescola.com/wp-content/uploads/2020/07/geologia-marte1.jpg",
        },
        {
          id:2,
          name: "Júpiter",
          description: `The legend of Grand Duchess Anastasia Nikolaevna of Russia.`,
          details: [
            { title: 'Music and Lyrics', body: 'Lynn Ahrens and Stephen Flaherty' },
            {
              title: 'Book by',
              body: 'Terrence McNally'
            },
            {
              title: 'Based on',
              body: 'A 1997 film of the same name.'
            },
            {
              title: 'Background',
              body: `A reading was held in 2012, featuring Kelli Barret as Anya (Anastasia), Aaron Tveit as Dmitry, Patrick Page as Vladimir, and Angela Lansbury as the Empress Maria. A workshop was held on June 12, 2015, in New York City, and included Elena Shaddow as Anya, Ramin Karimloo as Gleb Vaganov, a new role, and Douglas Sills as Vlad.
            The original stage production of Anastasia premiered at the Hartford Stage in Hartford, Connecticut on May 13, 2016 (previews). The show was directed by Darko Tresnjak and choreography by Peggy Hickey, with Christy Altomare and Derek Klena starring as Anya and Dmitry, respectively.
            Director Tresnjak explained: "We've kept, I think, six songs from the movie, but there are 16 new numbers. We've kept the best parts of the animated movie, but it really is a new musical." The musical also adds characters not in the film. Additionally, Act 1 is set in Russia and Act 2 in Paris, "which was everything modern Soviet Russia was not: free, expressive, creative, no barriers," according to McNally.
            The musical also omits the supernatural elements from the original film, including the character of Rasputin and his musical number "In the Dark of the Night", (although that song’s melody is repurposed in the new number "Stay, I Pray You"), and introduces instead a new villain called Gleb, a general for the Bolsheviks who receives orders to kill Anya.`
            }
          ],
          imageUrl: "https://classic.exame.com/wp-content/uploads/2020/12/jupiter.jpg?quality=70&strip=info&w=1024",
        },
      ]


      static getInstance(): PlanetService {
        return PlanetService._instance
      }
    
      private static _instance: PlanetService = new PlanetService()
    
      getPlanets(): any[] {
        return this.planets
      }
    
      getPlanetById(id: number): any | undefined {
        return this.planets.find(planet => planet.id === id) || undefined
      }
}