const ID = 'id';
const PRENOM = 'dossierPrenom';
const NOM = 'dossierNom';
export const MAP_FIELDS = {
    id: ID,
    nom: NOM,
    prenom: PRENOM,

    fields: [
        {
            alias: ID,
            type: 'integer',
            name: ID
        },
        {
            alias: PRENOM,
            type: 'string',
            name: PRENOM
        },
        {
            alias: NOM,
            type: 'string',
            name: NOM
        }
    ]
};
