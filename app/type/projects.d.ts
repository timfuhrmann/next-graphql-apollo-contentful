export namespace Projects {
    interface Error {
        message: string;
    }

    interface Sys {
        id: string;
    }

    interface Image {
        url: string;
    }

    interface Collection<T> {
        items: T[];
    }

    interface ContentfulCollection<T> {
        [key: string]: Collection<T>;
        errors?: Error[];
    }

    interface ProjectSlug {
        slug: string;
    }

    interface ProjectOverview {
        sys: Sys;
        year: number;
        title: string;
        slug: string;
        services: string[];
    }

    interface Project extends ProjectOverview {
        description: string;
        credits: string[];
        imagesCollection: Collection<Image>;
    }
}
