
export class Tag {
    static readonly ELOGIND = new Tag('elogind', '#67615C');
    static readonly CONSOLEKIT2 = new Tag('ConsoleKit2', '#5a7581');
    static readonly LIBREKERNEL = new Tag('libre-kernel', '#8a6571');  
    static readonly SHEPHERD = new Tag('shepherd', '#5a8581');
    static readonly SYSV = new Tag('sysV', '#6f733e');
    static readonly S6 = new Tag('s6', '#3c5c63');
    static readonly DINIT = new Tag('dinit', '##4a6a77');
    static readonly OPENRC = new Tag('OpenRC', '#756278');
    static readonly RUNIT = new Tag('runit', '#45719b' )






    private constructor(private readonly key: string, public readonly color: string) {
    }

    toString() {
        return this.key;
    }

}