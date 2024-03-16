namespace WinFormsApp5
{
    public partial class FrmOrdenarNomes : Form
    {
        public FrmOrdenarNomes()
        {
            InitializeComponent();
        }

        private void btClassificar_Click(object sender, EventArgs e)
        {
            String[] nomes = new string[5];
            String aux;
            nomes[0] = Txtnome1.Text;
            nomes[1] = Txtnome2.Text;
            nomes[2] = Txtnome3.Text;
            nomes[3] = Txtnome4.Text;
            nomes[4] = Txtnome5.Text;
            for (int j = 0; j < 4; j++)
            {
                if (nomes[j].Length >= 15)
                {
                    label7.Font = new Font("Arial Norrow", 10, System.Drawing.FontStyle.Bold);
                }
            }
            //ordenar lista

            for(int i = 0; i < 4; i++)
            {
                for(int j = i + 1;j <= 4; j++)
                {
                    if (String.CompareOrdinal(nomes[i], nomes[j]) > 0)
                    {
                        aux = nomes[i];
                        nomes[i] = nomes[j];
                        nomes[j] = aux;
                    }
                }
            }
            

            //Exibir lista no rótulo de saída

            groupBox2.Visible = true;
            for (int x = 0; x <= 4; x++)
            {
                label7.Text += "\n" + nomes[x] + "\n";
            }
        }

        private void btFechar_Click(object sender, EventArgs e)
        {
            String texto = "Deseja sair do programa?";
            String cabec = "*** Finalizando Aplicativo ***";
            bool resposta = (MessageBox.Show(texto, cabec, MessageBoxButtons.YesNo, MessageBoxIcon.Question) == DialogResult.Yes);
            if (resposta == true)
            {
                this.Close();
            }
        }

        private void btCancela_Click(object sender, EventArgs e)
        {
            Txtnome1.Clear();
            Txtnome2.Clear();
            Txtnome3.Clear();
            Txtnome4.Clear();
            Txtnome5.Clear();
        }
    }
}