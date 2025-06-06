// @ts-check
import { LandscapeSchema } from '@localfirstfm/landscape-schema'

export const data = LandscapeSchema.make({
	Version: 1,
	Id: 'pouchdb',
	Name: 'PouchDB',
	Description: 'Open source JavaScript database inspired by Apache CouchDB that is designed to run well within the browser.',
	Website: 'https://pouchdb.com/',
	Deployment: ['Self-hosted'],
	License: 'Apache-2.0',
	MaturityLevel: 'Production-Ready',
	InitialReleaseDate: new Date('Sun Dec 22 2013 00:00:00 GMT+0100 (Central European Standard Time)'), 
	AppTarget: {
		Platform: { data: ['Browser', 'Node'] },
		FrameworkIntegrations: { 
			data: ['React', 'Svelte', 'Vue', 'Angular'],
			comment: 'PouchDB can be used with all Javascript Frameworks, no special package required.',
		},
		LanguageSDK: { data: ['Typescript', 'JavaScript'] },
		ClientBundleSize: { data: '46KB', comment: '46KB zipped'}
	},
	
	Networking: {
		Topology: { 
			data: 'P2P / Client-server / Mesh Network / Relay Server',
			// comment: ''
		},
		Protocol: {
			data: ['HTTP', 'WebSockets']
		}
	},
	// ServerSideData: {
	// 	PersistenceMechanism: { 
	// 		data: ['N/A'],
	// 		// comment: ''
	// 	},
	// 	DataModelParadigm: { data: '' },
	// },
	ClientSideData: {
		QueryAPI: { data: ['Async'] },
		PersistenceMechanism: { data: ['IndexedDB', 'LevelDB', 'SQLite', 'Localstorage'] },
		PersistenceFeatures: { data: 'Indexes' },
		DataModel: { data: 'Document & Event Sourcing' },
		SchemaManagement: { data: ['Schema definition'], comment: ' validation & typing optional'},
		OfflineReads: { data: 'Full Support' },
		OfflineWrites: { data: 'Local conflict resolution' },
		OptimisticUpdates: { data: 'Yes' },
		DataSize: { data: 'Depends on the size of the shared data' },
	},
	SynchronizationStrategy: {
		FullOrPartialReplication: { 
			data: ['Full Replication', 'Partial Replication'],
			comment: 'Full Replication & Various Partial Replication Strategies'
		},
		ConflictHandling: { data: 'Flexible/Custom' },
		WhereResolutionOccurs: { data: 'Client and/or Server' },
		WhatGetsSynced: {
			data: {
				ServerToClient: 'Full document revisions',
				ClientToServer: 'Full document revisions'
			},
			comment: 'Efficient sync-list delta computation and efficient avoidance of redundant document sync.'
		},
		Authority: { 
			data: 'Default centralized, decentralized possible',
		},
		Latency: { 
			data: '~1–10ms',
			comment: 'Customisable for low-bandwidth and/or high-latency networks'
		},
		Concurrency: { data: 'Effectively unlimited' }
	},
	AuthIdentity: {
		Encryption: {
			data: 'Transport-level encryption',
			comment: 'Document encryption optional'
		},
		AuthenticationMethod: {
			data: ['Built-in', 'JWT Tokens', 'Basic Auth', 'Proxy Auth']
		},
		AuthorizationPermissions: {
			data: 'RBAC'
		}
	},
	DevelopmentWorkflowsDX: {
		TypeSupport: { data: 'Full type support'},
		DebuggingTools: { data: ['Data Inspector', 'Network Inspector']},
		CLI: { data: 'N/A' }
	}
})
