#include <QDir>
#include <QFile>
#include <QFileInfo>
#include <QTextStream>
#include <QStandardPaths>

#include "recordmanager.h"

const QString RecordManager::record_dir =
    QStandardPaths::writableLocation(QStandardPaths::DataLocation) + "/comp2012h_pipes";
const QString RecordManager::record_path =
    QStandardPaths::writableLocation(QStandardPaths::DataLocation) + "/comp2012h_pipes/record.txt";

RecordManager::RecordManager()
{
}

int RecordManager::get_record(int level)
{
}

int RecordManager::get_num_of_levels()
{
}

void RecordManager::update_record(int level, int value)
{
}
