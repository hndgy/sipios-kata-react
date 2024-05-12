const DOMAIN_PATTERN = /(?<country>(\w)+)_(?<classification>(\w)+)-(?<subClassification>(\w)+)/

const DomainUtils =  {
    findCountry(domain : string) {
        return DOMAIN_PATTERN.exec(domain)?.groups?.country ?? domain
    },

    findClassification(domain : string) {
        return DOMAIN_PATTERN.exec(domain)?.groups?.classification ?? domain
    },

    findSubClassification(domain : string) {
        return DOMAIN_PATTERN.exec(domain)?.groups?.subClassification ?? domain
    },
}

export default DomainUtils;