import * as tree from '../../public/api/v1/tree.json'
import { ProgramNode } from '../interfaces/program-node'
import { findChapterCount } from './find-chapter-count'

test('should count of all nodes given the entire tree', () => {
  const node: ProgramNode = tree as ProgramNode
  const value: number = findChapterCount(node)
  expect(value).toBeDefined()
  expect(value).toBe(165)
})

test('should count single location given a single location', () => {
  const node: ProgramNode = tree.nodes?.[9] as ProgramNode
  const value: number = findChapterCount(node)
  expect(value).toBeDefined()
  expect(value).toBe(1)
})

test('should count single location given the location is 1 deep in the tree with no children', () => {
  const node: ProgramNode = tree.nodes?.[10] as ProgramNode
  const value: number = findChapterCount(node)
  expect(value).toBeDefined()
  expect(value).toBe(41)
})

test('should find location given the location is 2 deep in the tree', () => {
  const node: ProgramNode = tree.nodes?.[10].nodes?.[28] as ProgramNode
  const value: number = findChapterCount(node)
  expect(value).toBeDefined()
  expect(value).toBe(2)
})
