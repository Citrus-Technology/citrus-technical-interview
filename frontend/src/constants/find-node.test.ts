import * as tree from '../../public/api/v1/tree.json'
import { ProgramNode } from '../interfaces/program-node'
import { findNode } from './find-node'

test('should return parent node given an id of undefined', () => {
  const node: ProgramNode = tree as any
  const value: ProgramNode | undefined = findNode(node, undefined) as any
  expect(value).toBeDefined()
  expect(value?.id).toBe(tree.id)
  expect(value?.type).toBe(tree.type)
  expect(value?.name).toBe(tree.name)
  expect(value?.description).toBe(tree.description)
})

test('should return the node that matches the id within the tree', () => {
  const node: ProgramNode = tree as any
  const value: ProgramNode | undefined = findNode(
    node,
    'loc_ySQgCP9AzLl90gmS'
  ) as any
  expect(value).toBeDefined()
  expect(value?.id).toBe('loc_ySQgCP9AzLl90gmS')
  expect(value?.type).toBe('chapter')
  expect(value?.name).toBe('Saskatoon')
  expect(value?.description).toBe(
    'We work to ensure that no kid is ever left watching from the sidelines in Saskatoon.'
  )
})

test('should return undefined given the node cannot be found', () => {
  const node: ProgramNode = tree as any
  const value: ProgramNode | undefined = findNode(node, 'invalid') as any
  expect(value).toBeUndefined()
})

test('should find location given the location is 0 deep in the tree', () => {
  const node: ProgramNode = tree as any
  const value: ProgramNode | undefined = findNode(
    node,
    'loc_1fMWbi8LHSWVspwg'
  ) as any
  expect(value).toBeDefined()
  expect(value?.id === node.id).toBeTruthy()
  expect(value?.id).toBe('loc_1fMWbi8LHSWVspwg')
  expect(value?.type).toBe('program')
  expect(value?.name).toBe('CanadaSport')
  expect(value?.description).toBe(
    'We work to ensure that no kid is ever left watching from the sidelines.'
  )
})

test('should find location given the location is 1 deep in the tree', () => {
  const node: ProgramNode = tree as any
  const value: ProgramNode | undefined = findNode(
    node,
    'loc_yqzHnnBrOpchEq9W'
  ) as any
  expect(value).toBeDefined()
  expect(value?.id).toBe('loc_yqzHnnBrOpchEq9W')
  expect(value?.type).toBe('chapter')
  expect(value?.name).toBe('Quebec')
  expect(value?.description).toBe(
    'We work to ensure that no kid is ever left watching from the sidelines in Quebec.'
  )
})

test('should find location given the location is 2 deep in the tree', () => {
  const node: ProgramNode = tree as any
  const value: ProgramNode | undefined = findNode(
    node,
    'loc_O8Bs0b1EhxBqdRVR'
  ) as any
  expect(value).toBeDefined()
  expect(value?.id).toBe('loc_O8Bs0b1EhxBqdRVR')
  expect(value?.type).toBe('chapter')
  expect(value?.name).toBe('Hudson Bay')
  expect(value?.description).toBe(
    'We work to ensure that no kid is ever left watching from the sidelines in Hudson Bay.'
  )
})

test('should find location given the location is 3 deep in the tree', () => {
  const node: ProgramNode = tree as any
  const value: ProgramNode | undefined = findNode(
    node,
    'loc_7uNiDS4fobdeFfq7'
  ) as any
  expect(value).toBeDefined()
  expect(value?.id).toBe('loc_7uNiDS4fobdeFfq7')
  expect(value?.type).toBe('chapter')
  expect(value?.name).toBe('East Regina')
  expect(value?.description).toBe(
    'We work to ensure that no kid is ever left watching from the sidelines in Regina.'
  )
})
