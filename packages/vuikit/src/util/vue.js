import { get } from 'vuikit/src/util/lang'

/*
 * Returns the closest parent of same type
 */
export function findParent (instance) {
  return findParents(instance).pop()
}

/*
 * Returns closest parents of same type
 */
export function findParents (instance) {
  const parents = []
  const name = instance.$options.name

  let parent = instance.$parent

  while (parent) {
    if (parent.$options.name === name) {
      parents.unshift(parent)
    }

    parent = parent.$parent
  }

  return parents
}

/*
 * Returns all descendant childs of same type
 */
export function findChilds (instance) {
  const name = instance.$options.name

  let childs = instance.$children
    .filter(child => child.$options.name === name)

  childs.forEach(child => {
    childs = [...childs, ...findChilds(child)]
  })

  return childs
}

/*
 * Resolve childrens as slots
 */
export function resolveSlots (children) {
  return children.reduce((slots, n) => {
    const name = get(n, 'data.slot', 'default')
    slots[name] = slots[name] || []

    if (n.tag === 'template') {
      slots[name].push.apply(slots[name], n.children || [])
    } else {
      slots[name].push(n)
    }

    return slots
  }, {})
}
