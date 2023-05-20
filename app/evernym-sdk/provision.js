// @flow

/*
  Here you need to specify application provisioning information.
*/

// an ID given to you from Evernym's Support Team after the Sponsor onboarding process is complete.
export const SPONSOR_ID = ''

// the list of used environments.
export const SERVER_ENVIRONMENTS = {
  'CUSTOM': {
    agencyUrl: 'https://agency.pps.evernym.com',
    agencyDID: '3mbwr7i85JNSL3LoNQecaW',
    agencyVerificationKey: '2WXxo6y1FJvXWgZnoYUP5BJej2mceFrqBDNPE3p6HDPf',
    poolConfig: [{ key: 'staging', genesis: 'genesis_transactions' }],
  }
}
export const DEFAULT_SERVER_ENVIRONMENT = 'DEMO'


// environment to use by default
// export const DEFAULT_SERVER_ENVIRONMENT = 'DEMO'

/*
 * Function to be called to get provision token
 * Signature: GET_PROVISION_TOKEN_FUNC() -> [error: string | null, token: string | null]
 * */
export const GET_PROVISION_TOKEN_FUNC = null

export const VCX_PUSH_TYPE = 3

