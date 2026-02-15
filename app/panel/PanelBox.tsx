'use client'

import React from 'react'

type PanelBoxProps = { className?: string; children?: React.ReactNode }

export function PanelBox(props: PanelBoxProps) {
  return React.createElement('div', { className: props.className }, props.children)
}
