import Link from "next/link"

const Nav = () => {
  return (
    <header>
        <nav>
            <div>Create</div>
            <div>
                <Link href="/">Home</Link>
                <Link href="/CreateUser">Create User</Link>
                <Link href="/MemberClient">Client Member</Link>
                <Link href="/Member">Member</Link>
                <Link href="/Public">Public</Link>
            </div>
        </nav>
    </header>
  )
}

export default Nav
