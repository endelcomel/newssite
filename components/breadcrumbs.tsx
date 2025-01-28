import Link from "next/link"

export function Breadcrumbs({ items }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex space-x-2 text-sm text-gray-500">
        {items.map((item, index) => (
          <li key={item.href}>
            {index > 0 && <span className="mx-2">/</span>}
            {index === items.length - 1 ? (
              <span aria-current="page">{item.label}</span>
            ) : (
              <Link href={item.href} className="hover:text-blue-600">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

