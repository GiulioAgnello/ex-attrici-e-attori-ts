type Person = {
  id: number;
  name: string;
  birth_year: number;
  death_year?: number;
  biography: string;
  image: string;
};

type Actress = Person & {
  most_famous_movie: string[];
  awards: string;
  nationality:
    | "American"
    | "British"
    | "Australian"
    | " Israeli-American"
    | "South African"
    | "French"
    | "Indian"
    | "Israeli"
    | "Spanish"
    | " South Korean"
    | "Chinese";
};
