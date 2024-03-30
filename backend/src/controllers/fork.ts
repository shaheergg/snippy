import { prisma } from "../db";

// export const createFork = async (req, res) => {
//   const userId = req.user.id;
//   const { snippetId } = req.params;
//   try {
//     const fork = await prisma.fork.create({
//       data: {
//         snippet: {
//           connect: {
//             id: parseInt(snippetId),
//           },
//         },
//         user: {
//           connect: {
//             id: userId,
//           },
//         },
//       },
//     });
//     res.json(fork);
//   } catch (error) {}
// };
