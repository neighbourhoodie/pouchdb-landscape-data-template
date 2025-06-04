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
	// AppTarget: {
	// 	LanguageSDK: { data: ['typescript'] },
	// },
	// Networking: {
	// 	Topology: { data: 'Client-Server' },
	// },
	// ServerSideData: {
	// 	PersistenceMechanism: { data: ['N/A'] },
	// 	DataModelParadigm: { data: 'Relational' },
	// },
	// ClientSideData: {
	// 	QueryAPI: { data: ['Async'] },
	// 	PersistenceMechanism: { data: ['IndexedDB', 'OPFS'] },
	// 	PersistenceFeatures: { data: 'Indexes' },
	// 	DataModel: { data: 'Document' },
	// 	OfflineReads: { data: 'Full Support' },
	// 	OfflineWrites: { data: 'Local conflict resolution' },
	// 	DataSize: { data: 'Up to 5-10 MB per document' },
	// },
	// SynchronizationStrategy: {
	// 	FullOrPartialReplication: { data: ['Full Replication'] },
	// 	ConflictHandling: { data: 'Automatic via CRDT' },
	// 	WhereResolutionOccurs: { data: 'Client' },
	// 	WhatGetsSynced: {
	// 		data: {
	// 			ClientToClient: 'Ops',
	// 		},
	// 	},
	// },
})
