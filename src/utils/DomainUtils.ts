const DOMAIN_PATTERN = /(?<country>(\w)+)_(?<classification>(\w)+)-(?<subClassification>(\w)+)/

const DomainUtils =  {
    findCountry(domain : string) {
        return DOMAIN_PATTERN.exec(domain)?.groups?.country ?? ""
    },

    findClassification(domain : string) {
        return DOMAIN_PATTERN.exec(domain)?.groups?.classification ?? ""
    },

    findSubClassification(domain : string) {
        return DOMAIN_PATTERN.exec(domain)?.groups?.subClassification ?? ""
    },
}

export default DomainUtils;