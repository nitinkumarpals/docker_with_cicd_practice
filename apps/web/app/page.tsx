import prisma from "db/client";

export default async function Home() {
  const users = await prisma.user.findMany();
  return (
    <>
      <h1>Users</h1>
      <div>
        {users.map((user) => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
    </>
  );
}
export const dynamic = "force-dynamic";
